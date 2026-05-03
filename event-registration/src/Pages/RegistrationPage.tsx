import RegistrationForm from "../Components/Registration/RegistrationForm"
import RegistrationList from "../Components/Registration/RegistrationList"
import type { Registration } from "../Types/Type"

interface Props {
  registrations: Registration[]
  addRegistration: (reg: Registration) => void
  deleteRegistration: (id: number) => void
  updateRegistration: (reg: Registration) => void
}

function RegistrationPage({
  registrations,
  addRegistration,
  deleteRegistration,
  updateRegistration
}: Props) {
  return (
    <div className="page">
      <RegistrationForm addRegistration={addRegistration} />

      <div className="list">
        <RegistrationList
          registrations={registrations}
          deleteRegistration={deleteRegistration}
          updateRegistration={updateRegistration}
        />
      </div>
    </div>
  )
}

export default RegistrationPage