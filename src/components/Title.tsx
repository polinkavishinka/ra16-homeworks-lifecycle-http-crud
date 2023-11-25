interface TitleProps {
    updateData: () => void
}

export const Title = ({updateData}: TitleProps) => {
  return (
    <div>
        <h1>Notes</h1>
        <button onClick={updateData}>Обновить</button>
    </div>
  )
}
