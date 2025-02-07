import { CopyIcon, SmallCloseIcon } from "@chakra-ui/icons";
import {
	Box,
	Flex,
	Grid,
	HStack,
	Heading,
	SimpleGrid,
	Textarea,
	VStack,
	useClipboard,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { common_phrases, keyboard_keys } from "../data";
import ActionButton from "./ActionButton";
import CharButton from "./CharButton";

const Keyboard = () => {
	const [typedText, setTypedText] = useState("");
	const { hasCopied, onCopy } = useClipboard(typedText);
	const handleKeyPress = (key) => {
		setTypedText(typedText + key);
	};

	return (
		<HStack
			alignItems={"self-start"}
			maxW={"100vw"}
			justify={"space-between"}
			m={{ base: "1em", lg: 0 }}
			p={{ base: "10px", md: "10px 1em" }}
			bg={
				"linear-gradient(104deg, rgba(219,229,255,1) 0%, rgba(222,222,222,1) 100%);"
			}
		>
			<VStack spacing={2} w="100%">
				<Textarea
					rows={3}
					value={typedText}
					border={"2px solid purple"}
					fontSize={{ base: "1em", md: "2em" }}
					onChange={(e) => setTypedText(e.target.value)}
				/>

				<VStack align="start" w={"100%"}>
					<Flex align="center" justify={"start"} gap={3} w={"100%"}>
						<ActionButton
							onClick={onCopy}
							icon={<CopyIcon />}
							name="Copy"
							color="purple"
						/>
						<ActionButton
							onClick={() => setTypedText("")}
							icon={<SmallCloseIcon />}
							name="Clear"
							color="gray"
						/>
					</Flex>
					{/* {
						<div style={{ visibility: hasCopied ? "visible" : "hidden" }}>
							Copied!
						</div>
					} */}
				</VStack>

				<SimpleGrid
					columns={{ base: 1, lg: 2 }}
					spacing={0}
					gap={"4em"}
					maxW={"1200px"}
				>
					<Grid
						templateColumns={{
							base: "repeat(6, 1fr)",
							md: "repeat(6, 1fr)",
						}}
						gap={0}
					>
						{Object.entries(keyboard_keys.consonants).map(
							([category, keys]) => (
								<CharButton
									eng_name={keys}
									key={category}
									local_name={category}
									onClick={() => handleKeyPress(category)}
								/>
							),
						)}
					</Grid>
					<VStack spacing={0}>
						<Grid
							templateColumns={{
								base: "repeat(6, 1fr)",
							}}
							gap={2}
						>
							{Object.entries(keyboard_keys.vowels).map(([category, keys]) => (
								<CharButton
									eng_name={keys}
									key={category}
									local_name={category}
									onClick={() => handleKeyPress(category)}
								/>
							))}
						</Grid>
						<Grid
							templateColumns={{
								base: "repeat(6, 1fr)",
							}}
							gap={3}
							mt={2}
							ml={"7em"}
						>
							{Object.entries(keyboard_keys.punctuation).map(
								([category, keys]) => (
									<CharButton
										noText
										eng_name={keys}
										key={category}
										local_name={category}
										onClick={() => handleKeyPress(category)}
									/>
								),
							)}
						</Grid>

						<Grid
							templateColumns={{
								base: "repeat(5, 1fr)",
							}}
							gap={3}
							mt={1}
						>
							{Object.entries(keyboard_keys.numbers).map(([category, keys]) => (
								<CharButton
									eng_name={category}
									key={category}
									local_name={keys}
									onClick={() => handleKeyPress(keys)}
								/>
							))}
						</Grid>
					</VStack>
				</SimpleGrid>
			</VStack>
			<VStack
				border={"1px solid purple"}
				borderRadius={"10px"}
				p={"10px"}
				h={"98vh"}
			>
				<Heading fontSize={"1em"}>Most used / Helper words</Heading>
				<Box overflow={"auto"} align={"center"}>
					{common_phrases.map((text, index) => (
						<CharButton
							eng_name={text.eng}
							key={index}
							local_name={text.hindi}
							onClick={() => handleKeyPress(text.hindi)}
						/>
					))}
				</Box>
			</VStack>
		</HStack>
	);
};

export default Keyboard;
