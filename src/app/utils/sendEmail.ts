/**
 * This function will take in a component form, and then use that component form to export the message
 */
import { emailFormData } from "../components/contact";
export function sendEmail(data: emailFormData) {
  console.log(data, "send over!");
  const endPoint = "/api/email";

  fetch(endPoint, {
    method: "POST",
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      alert(err);
    });
}
