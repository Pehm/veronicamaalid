export default function ContactForm({ translations }: { translations: any }) {
    return (
        <form className="contact-form">
            <label htmlFor="name">{translations["contact form"].name}</label>
            <input type="text" id="name" name="name" />

            <label htmlFor="email">{translations["contact form"].email}</label>
            <input type="email" id="email" name="email" />

            <label htmlFor="message">{translations["contact form"].message}</label>
            <textarea id="message" name="message"></textarea>

            <button type="submit">{translations["contact form"].submit}</button>
        </form>
    );
}
