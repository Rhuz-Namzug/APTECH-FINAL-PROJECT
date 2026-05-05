import RegistrationForm from "../Components/Registration/RegistrationForm"
import RegistrationList from "../Components/Registration/RegistrationList"
import type { Registration } from "../Types/Type"

interface Props {
  registrations: Registration[]
  addRegistration: (reg: Registration) => void
  deleteRegistration: (id: number) => void
  updateRegistration: (reg: Registration) => void
  editRegistration: (reg: Registration) => void
  editingRegistration: Registration | null
  cancelEditRegistration: () => void
}

function RegistrationPage({
  registrations,
  addRegistration,
  deleteRegistration,
  updateRegistration,
  editRegistration,
  editingRegistration,
  cancelEditRegistration 
}: Props) {
  return (
    <div className="page">
  <RegistrationForm
  addRegistration={addRegistration}
  updateRegistration={updateRegistration}
  editingRegistration={editingRegistration}
  cancelEditRegistration={cancelEditRegistration}
/>

<RegistrationList
  registrations={registrations}
  deleteRegistration={deleteRegistration}
  updateRegistration={updateRegistration}
  editRegistration={editRegistration}
/>
      </div>
  )
}

export default RegistrationPage