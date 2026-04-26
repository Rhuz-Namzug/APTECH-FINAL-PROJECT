import RegistrationForm from "../Components/Registration/RegistrationForm"
import RegistrationList from "../Components/Registration/RegistrationList"
import type { Registration } from "../Types/Type"

interface Props {
  registrations: Registration[]
  addRegistration: (reg: Registration) => void
  deleteRegistration: (id: number) => void
}

function RegistrationPage({ registrations, addRegistration, deleteRegistration }: Props) {

  return (
    <div className="page">
      <RegistrationForm addRegistration={addRegistration} />

      <RegistrationList
        registrations={registrations}
        deleteRegistration={deleteRegistration}
      />
    </div>
  )
}

export default RegistrationPage