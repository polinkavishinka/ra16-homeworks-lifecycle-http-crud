/* eslint-disable @typescript-eslint/no-explicit-any */
interface CreateBoxProps {
    value: string,
    handleTextaria: (e: string) => void,
    handleBtnCreate: (e: any) => void
}

export const CreateBox = ({value, handleTextaria, handleBtnCreate}: CreateBoxProps) => {
  return (
    <div>
        <textarea
            value={value}
            onChange={(e) => handleTextaria(e.target.value)}
        />
        <button onClick={handleBtnCreate}>Создать</button>
    </div>
  )
}
