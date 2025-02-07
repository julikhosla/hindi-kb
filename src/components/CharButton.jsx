import { Button, Text } from "@chakra-ui/react";

const CharButton = ({ eng_name, onClick, local_name, noText }) => {
	return (
		<div>
			{!noText && <Text>{eng_name}</Text>}
			<Button
				onClick={onClick}
				colorScheme="purple"
				size={{ base: "md" }}
				fontSize={{ base: "lg" }}
				variant="outline"
			>
				{local_name}
			</Button>
		</div>
	);
};

export default CharButton;
