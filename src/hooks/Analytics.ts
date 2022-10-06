import { logEvent } from "firebase/analytics";
import { Firebase } from "../utils/Firebase";

export function useAnalytics() {
  return {
    pageView: ({
      screenName,
      screenClass,
    }: {
      screenName: string;
      screenClass: string;
    }) => {
      logEvent(Firebase.analytics, "screen_view", {
        firebase_screen: screenName,
        firebase_screen_class: screenClass,
      });
    },
    selectContent: ({
      contentType,
      contentId,
    }: {
      contentType: string;
      contentId: string;
    }) => {
      logEvent(Firebase.analytics, "select_content", {
        content_type: contentType,
        content_id: contentId,
      });
    },
  };
}
