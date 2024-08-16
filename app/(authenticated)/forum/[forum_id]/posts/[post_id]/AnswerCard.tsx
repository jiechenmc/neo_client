import { Card, CardHeader, CardBody, CardFooter, Avatar, Input, Heading, Button, Editable, EditableInput, EditablePreview } from "@chakra-ui/react";
import { Answer, ForumAnswerPostRequest } from "@/app/_types/main";
import moment from "moment";
import { useRef, useState } from "react";
import { PaperPlaneTilt, PencilSimple } from "@phosphor-icons/react";
import EditableControls from "@/components/EditableControls";

interface Input {
    answerer: Answer | null
    title: string
    postId: string
    addAnswer: (content: string, role: string, postId: string) => Promise<Response>
}

const AnswerCard = ({ answerer, title, addAnswer, postId }: Input) => {

    const inputRef = useRef<HTMLInputElement>(null)

    const handlePostAnswer = () => {
        if (inputRef.current)
            addAnswer(inputRef.current.value, title === "Instructor Answer" ? "instructor" : "student", postId)
    }

    console.log(answerer?.content)

    return <div className="shadow-md">
        <Card variant={"outline"}>
            <CardHeader className="bg-light-bg-subtle">
                {answerer ? <div className={`flex items-center w-full h-full `}>
                    <Avatar name={answerer?.author} src={answerer?.authorPhotoURL}>
                    </Avatar>
                    <div className="relative size-3 ml-[-12px] mb-[-30px] rounded-fullz-10">
                    </div>
                    <div className="flex flex-col ml-3">
                        <p className="text-sm font-semibold">{answerer?.author}</p>
                        <span className="flex gap-1">
                            <small className="text-light-fg-text capitalize" >{answerer?.role} ·</small>
                            <small className="text-light-fg-text">{moment(answerer?.timestamp.toDate()).fromNow()}</small>
                        </span>
                    </div>
                </div> : <Heading size={'md'}>{title}</Heading>}
            </CardHeader>
            <CardBody className="bg-light-bg-subtle">
                <Editable
                    className="flex flex-col gap-2"
                    isPreviewFocusable={false} value={answerer?.content} onSubmit={handlePostAnswer}>
                    <EditablePreview />
                    {answerer?.content ? <>
                        <Input as={EditableInput} placeholder={"Add an answer..."} ref={inputRef} />
                        <EditableControls />
                    </> : <>
                        <Input placeholder={answerer?.content ?? "Add an answer..."} ref={inputRef} />
                        <Button leftIcon={answerer?.content ? <PencilSimple size={16} /> : <PaperPlaneTilt size={16} />} color={"#285ADE"} maxW={'xs'} onClick={handlePostAnswer}>
                            Post
                        </Button>
                    </>}

                </Editable>
            </CardBody>
            <CardFooter className="bg-light-bg-subtle">

            </CardFooter>
        </Card >
    </div >;
}

export default AnswerCard;