import { Button } from "@chakra-ui/react";

const ActionButton = ({ onClick, icon, name, color }) => {
	return (
		<Button
			onClick={onClick}
			variant="solid"
			colorScheme={color}
			size={{ base: "sm", md: "lg" }}
			fontSize={{ base: "lg", md: "xl" }}
			rightIcon={icon}
		>
			{name}
		</Button>
	);
};

export default ActionButton;
