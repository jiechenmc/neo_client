import React from 'react'
import Message from './Message'

const Messages = ({ messages }: { messages: string[] }) => {
  const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
  do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
  ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit
  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
  occaecat cupidatat non proident, sunt in culpa qui officia
  deserunt mollit anim id est laborum.`
  return (
    <div className='flex flex-col h-full px-20 py-10 overflow-auto no-scrollbar'>
      <Message text={lorem} />
      <Message text={lorem} />
      <Message text={lorem} />
      <Message text={lorem} />
      <Message text={lorem} />
      {messages.map((m) => m ? <Message key={crypto.randomUUID()} text={m} /> : <></>)}
    </div>
  )
}

export default Messages