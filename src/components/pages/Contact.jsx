
//Need a notification when user moves cursor out of for field without entering text
//Form is Required

//User receives a notification if email addreses is invalid in the email field
function Contact() {
  return (
    <div>
      <h1>Contact Me: </h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Message:
          <input type="text" name="message" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;


