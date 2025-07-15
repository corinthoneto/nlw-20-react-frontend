import { Navigate, useParams } from 'react-router-dom'

type RoomParams = {
  roomId: string
}

export function Room() {
  const params = useParams<RoomParams>()

  if (!params.roomId) {
    return <Navigate replace to="/" />
  }

  return (
    <div>
      <h1>Room details</h1>
      <p>{JSON.stringify(params)}</p>
      {/* Additional content and components can be added here */}
    </div>
  )
}
