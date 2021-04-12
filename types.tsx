export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  ChatRoom: undefined;
  ChatsScreen: undefined;
  Contacts: undefined;
  SignIn: undefined;
  SignUp: undefined;
  AddRoom: undefined;
  MainDrawerNavigator: undefined;

};

export type RootDrawerParamList = {
  Home: undefined;
  SignIn: undefined;
  SignUp: undefined;
};

export type MainTabParamList = {
  Camera: undefined;
  Chats: undefined;
  Status: undefined;
  Calls: undefined;
};


export type User = {
  id: String;
  name: String;
  imageUri: String;
};

export type Message = {
  id: String;
  user: User;
  content: string,
  createdAt: string
}

export type ChatRoom = {
  id: String;
  users: User[];
  lastMessage: Message;
};
