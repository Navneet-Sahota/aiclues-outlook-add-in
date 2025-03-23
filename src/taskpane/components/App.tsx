import React, { useState } from "react";
import {
	Stack,
	TextField,
	PrimaryButton,
	MessageBar,
	MessageBarType,
	ITextFieldStyles,
} from "@fluentui/react";

// Common text field styles
const textFieldStyles = {
	fieldGroup: { boxShadow: "0 0 0 1px #ced4da" },
};

// Interface for Contact data
interface Contact {
	name: string;
	jobTitle: string;
	organization: string;
	email: string;
	phone: string;
	notes: string;
}

export default function App() {
	// Contact state
	const [contact, setContact] = useState<Contact>({
		name: "",
		jobTitle: "",
		organization: "",
		email: "",
		phone: "",
		notes: "",
	});

	// UI state
	const [showConfirmation, setShowConfirmation] = useState(false);
	const [confirmationMessage, setConfirmationMessage] = useState("");

	// Handle contact form submission
	const handleContactSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setConfirmationMessage("Contact saved successfully!");
		setShowConfirmation(true);
		setContact({
			name: "",
			jobTitle: "",
			organization: "",
			email: "",
			phone: "",
			notes: "",
		});
		setTimeout(() => setShowConfirmation(false), 3000);
	};

	// Handle contact form field changes
	const handleContactChange = (field: keyof Contact, value: string) => {
		setContact((prevContact) => ({
			...prevContact,
			[field]: value,
		}));
	};

	return (
		<Stack
			tokens={{ childrenGap: 32 }}
			style={{
				minHeight: "100vh",
				padding: "32px",
				paddingTop: "8px",
				paddingBottom: "16px",
			}}
		>
			<h1 style={{ lineHeight: "1.2" }}>Contact Clues</h1>

			<Stack tokens={{ childrenGap: 24 }} style={{ marginTop: 16 }}>
				<form onSubmit={handleContactSubmit}>
					<Stack tokens={{ childrenGap: 16 }}>
						<TextField
							label="Name"
							required
							value={contact.name}
							onChange={(_, val) => handleContactChange("name", val ?? "")}
							styles={{
								...textFieldStyles,
								fieldGroup: { ...textFieldStyles.fieldGroup, height: 40 },
							}}
						/>

						<Stack
							horizontal
							tokens={{ childrenGap: 12 }}
							styles={{ root: { width: "100%" } }}
						>
							<Stack.Item grow={1}>
								<TextField
									label="Job Title"
									value={contact.jobTitle}
									onChange={(_, val) =>
										handleContactChange("jobTitle", val ?? "")
									}
									styles={textFieldStyles}
								/>
							</Stack.Item>
							<Stack.Item grow={1}>
								<TextField
									label="Organization"
									value={contact.organization}
									onChange={(_, val) =>
										handleContactChange("organization", val ?? "")
									}
									styles={textFieldStyles}
								/>
							</Stack.Item>
						</Stack>

						<Stack
							horizontal
							tokens={{ childrenGap: 12 }}
							styles={{ root: { width: "100%" } }}
						>
							<Stack.Item grow={1}>
								<TextField
									label="Email"
									type="email"
									value={contact.email}
									onChange={(_, val) => handleContactChange("email", val ?? "")}
									styles={textFieldStyles}
								/>
							</Stack.Item>
							<Stack.Item grow={1}>
								<TextField
									label="Phone"
									value={contact.phone}
									onChange={(_, val) =>
										handleContactChange(
											"phone",
											val ? val.replace(/\D/g, "") : ""
										)
									}
									inputMode="numeric"
									pattern="[0-9]*"
									styles={textFieldStyles}
								/>
							</Stack.Item>
						</Stack>

						<TextField
							label="Notes"
							multiline
							rows={3}
							resizable={false}
							value={contact.notes}
							onChange={(_, val) => handleContactChange("notes", val ?? "")}
							styles={textFieldStyles}
						/>

						<PrimaryButton
							type="submit"
							text="Save Contact"
							styles={{
								root: {
									marginTop: 8,
									width: "100%",
									maxWidth: "none",
								},
							}}
						/>
					</Stack>
				</form>
			</Stack>

			{showConfirmation && (
				<MessageBar
					messageBarType={MessageBarType.success}
					styles={{
						root: {
							position: "fixed",
							bottom: 20,
							left: 20,
							right: 20,
							padding: "8px 0px",
							maxWidth: "calc(100% - 40px)",
						},
						text: { paddingLeft: 0, marginLeft: "-8px" },
					}}
				>
					{confirmationMessage}
				</MessageBar>
			)}
		</Stack>
	);
}
