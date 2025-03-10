export type inputProps = {
  value: string;
  type?: string;
  loading: boolean;
  defaultValue?: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  title: string;
  action?: () => void;
};
export type HeaderProps = {
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
  showMenu: boolean;
  setShowNotifications: React.Dispatch<React.SetStateAction<boolean>>;
  showNotifications: boolean;
};

export type ComponentProps = {
  /** The text to display inside the button */
  item: {
    id: number;
    link: string;
    icon: any;
    title: string;
  };
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export type LlmApiState = {
  status: "idle" | "loading" | "failed" | "success";
  error: string | null;
};

export type ChatBubbleProps = {
  message: Message;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};
export type Message = {
  _id?: string;
  sender: string;
  message: string;
  chatID: string;
  senderID: string;
  time: string;
};
export type UserBasicInfo = {
  _id: string;
  firstname: string;
  lastname: string;

  email: string;
};

export type MessagePayload = {
  message: string;
};
export type UserProfileData = {
  name: string;
  email: string;
};
export interface AuthApiState {
  basicUserInfo?: UserBasicInfo | null;
  userProfileData?: UserProfileData | [] | null;
  status: "idle" | "loading" | "failed" | "success";
  error: string | null;
}
export interface LoginCredentials {
  email: string;
  password: string;
}
export type SidebarProps = {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export type SideBarItem = {
  /** The text to display inside the button */
  id: number;
  title: string;
  link: string;

  icon: any;

  /** Whether the button can be interacted with */
};
