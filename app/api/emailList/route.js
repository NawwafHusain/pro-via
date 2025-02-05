import { Client } from "@microsoft/microsoft-graph-client";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { email } = await req.json();
  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const tenantId = process.env.M365_TENANT_ID;
  const clientId = process.env.M365_CLIENT_ID;
  const clientSecret = process.env.M365_CLIENT_SECRET;
  const siteId = process.env.M365_SITE_ID;
  const listId = process.env.M365_LIST_ID;

  try {
    const tokenResponse = await fetch(
      `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`,
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          grant_type: "client_credentials",
          client_id: clientId,
          client_secret: clientSecret,
          scope: "https://graph.microsoft.com/.default",
        }),
      }
    );

    const tokenData = await tokenResponse.json();

    console.log(tokenData.access_token);
    if (!tokenResponse.ok) {
      console.error("Token Fetch Error:", tokenData);
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const accessToken = tokenData.access_token;

    const graphClient = Client.init({
      authProvider: (done) => done(null, accessToken),
    });

    await graphClient.api(`/sites/${siteId}/lists/${listId}/items`).post({
      fields: { Email: email },
    });

    return NextResponse.json(
      { message: "Email saved successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Graph API Error:", error);
    return NextResponse.json(
      { error: "Failed to save email" },
      { status: 500 }
    );
  }
}
