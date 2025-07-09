import { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";

const HomePage = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, []);

  // Show sidebar by default on desktop, or if no user is selected on mobile
  useEffect(() => {
    if (!selectedUser) setShowSidebar(true);
    else setShowSidebar(false);
  }, [selectedUser]);

  return (
    <div className="w-full bg-base-200 px-2 sm:px-4 pt-16">
      <div className="bg-base-100 rounded-lg shadow-cl w-full max-w-6xl mx-auto h-[calc(100vh-4rem)]">
        <div className="flex h-full rounded-lg overflow-hidden">
          {/* Sidebar: full screen on mobile if no chat selected */}
          <Sidebar
            mobileOpen={showSidebar}
            onClose={() => setShowSidebar(false)}
            onUserSelect={() => setShowSidebar(false)}
          />
          {/* Chat: show only if user selected */}
          {!selectedUser ? (
            <NoChatSelected />
          ) : (
            <ChatContainer onBack={() => setShowSidebar(true)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
