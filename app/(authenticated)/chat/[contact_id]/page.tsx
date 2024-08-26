"use client"
import { Contact } from "@/app/_types/main";
import useContacts from "@/hooks/useContacts";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import MessageBox from "../MessageBox";

const ChatPage = () => {
    const { contact_id } = useParams<{ contact_id: string }>()
    const { contacts, loading } = useContacts()

    const [selectedContact, setSelectedContact] = useState<Contact>({ name: "", photoURL: "", uid: "test", email: "" })

    useEffect(() => {
        setSelectedContact(contacts.filter(c => c.uid === contact_id)[0])
    }, [contacts])

    return <div>
        <MessageBox contact={selectedContact} />
    </div>;
}

export default ChatPage;