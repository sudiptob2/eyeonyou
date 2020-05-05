import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

const PrivacyModal = (props) => {
    const [open, setOpen] = React.useState(false);
    const policyText = (
        <p>
            Your privacy is important to us. It is Eye On You's policy to
            respect your privacy regarding any information we may collect from
            you across our website, http://eou.com, and other sites we own and
            operate. We only ask for personal information when we truly need it
            to provide a service to you.{" "}
            <strong>We do not collect any video data from your camera.</strong>{" "}
            We don’t share any personally identifying information publicly or
            with third-parties, except when required to by law. Our website may
            link to external sites that are not operated by us. Please be aware
            that we have no control over the content and practices of these
            sites, and cannot accept responsibility or liability for their
            respective privacy policies. You are free to refuse our request for
            your personal information, with the understanding that we may be
            unable to provide you with some of your desired services. Your
            continued use of our website will be regarded as acceptance of our
            practices around privacy and personal information. If you have any
            questions about how we handle user data and personal information,
            feel free to contact us. This policy is effective as of 30 April
            2020.
        </p>
    );
    return (
        <>
            <button className="item1" onClick={() => setOpen(true)}>
                Privacy Policy
            </button>
            <Modal open={open} onClose={() => setOpen(false)} center>
                <h2>Privacy Policy</h2>
                {policyText}
            </Modal>
        </>
    );
};

export default PrivacyModal;
