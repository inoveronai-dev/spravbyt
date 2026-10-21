import { redirect } from "next/navigation";

/**
 * Homepage demo: any direct subpage URL returns visitors to the homepage.
 * Subpage routes can be added later without deleting this gate until demo mode ends.
 */
export default function CatchAllSubpageRedirect() {
  redirect("/");
}
