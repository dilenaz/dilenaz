import { requireChatGPTUser, chatGPTSignOutPath } from "../chatgpt-auth";
import { isPortfolioAdminEmail } from "../../lib/admin-auth";
import AdminPanel from "./AdminPanel";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const user = await requireChatGPTUser("/admin");
  const isAdmin = isPortfolioAdminEmail(user.email);

  if (!isAdmin) {
    return <main className="adminShell"><div className="adminDenied"><span>Yetkisiz hesap</span><h1>Bu alan yalnızca Dilenaz’a ait.</h1><p>{user.email} hesabının içerik düzenleme yetkisi yok.</p><a href={chatGPTSignOutPath("/admin")}>Başka hesapla giriş yap</a></div></main>;
  }

  return <AdminPanel userName={user.fullName ?? "Dilenaz"} signOutPath={chatGPTSignOutPath("/")} />;
}
