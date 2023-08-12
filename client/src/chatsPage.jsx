import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
	return (
		<div style={{ height: "100vh", width: "100vw" }}>
			<PrettyChatWindow
				projectId='f40226ca-c415-4799-89f9-99206b6c6667'
				username={props.user.username}
				secret={props.user.secret} 
				style={{ height: "100%" }}
			/>
		</div>
	);
};

export default ChatsPage;
