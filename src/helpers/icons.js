import { library } from "@fortawesome/fontawesome-svg-core";

import { faTrash, faSignOutAlt, faEdit, faSpinner, faPlusCircle, faPhone, faEnvelope, faMapMarkedAlt, faLock } from "@fortawesome/free-solid-svg-icons"

export const Icons = () => {
   return library.add( faTrash, faSignOutAlt, faEdit, faSpinner, faPlusCircle, faPhone, faEnvelope, faMapMarkedAlt, faLock);
}
