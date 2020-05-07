import React from "react";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import CameraPage from "../../assets/images/camera_page.png";
import muteIconRed from "../../assets/images/interface_red.svg";
import LandingPage from "../../assets/images/landing_page.png";
import powerIcon from "../../assets/images/power.svg";
import "./ModalView.css";

const HowItWorksModal = (props) => {
    const [open, setOpen] = React.useState(false);
    const userGuide = (
        <p style={{ textAlign: "justify" }}>
            <h5>What is EyeOnYou</h5>
            <hr />
            <p>
                Eye on you is an AI based virtual co-working solution which
                helps you to focus on your work. EyeOnYou will use Machine
                Learning to detect your activity such as : movement of your
                face, hand, eye ect to determine your focus on the computer and
                notifies you if you loose your focus. As we do not send any data
                to the server and the processing is done on the client side so
                your privacy is protected.
            </p>
            <p className=" text-center">
                <img src={LandingPage} alt="mute" width="400" height="200" />
            </p>
            <hr />
            <h5>How to use EyeOnYou</h5>
            <hr />
            <p>
                First Click Start to start the EyeOnYou Camera. Then in the
                camera page set up sound notification by clicking{" "}
                <img src={muteIconRed} alt="mute" width="16" height="16" />{" "}
                icon. You can mute/unmute it later also. Click{" "}
                <img src={powerIcon} alt="mute" width="16" height="16" /> to
                start focusing (by opening the small window). You can now close
                the current window.
            </p>
            <p className=" text-center">
                <img src={CameraPage} alt="mute" width="400" height="300" />
            </p>
            <p>
                <span style={{ color: "red" }}>
                    Do not close the small window.
                </span>{" "}
                Now you can start your general workflow. EyeOnYou will notify
                you if you loose your focus.
            </p>
            <hr />
            <h5>Privacy Policy</h5>
            <hr />
            <p>
                Your privacy is important to us. It is Eye On You's policy to
                respect your privacy regarding any information we may collect
                from you across our website, http://eou.com, and other sites we
                own and operate. We only ask for personal information when we
                truly need it to provide a service to you.{" "}
                <strong>
                    We do not collect any video data from your camera.
                </strong>{" "}
                We don’t share any personally identifying information publicly
                or with third-parties, except when required to by law. Our
                website may link to external sites that are not operated by us.
                Please be aware that we have no control over the content and
                practices of these sites, and cannot accept responsibility or
                liability for their respective privacy policies. You are free to
                refuse our request for your personal information, with the
                understanding that we may be unable to provide you with some of
                your desired services. Your continued use of our website will be
                regarded as acceptance of our practices around privacy and
                personal information. If you have any questions about how we
                handle user data and personal information, feel free to contact
                us. This policy is effective as of 30 April 2020.
            </p>
        </p>
    );
    return (
        <>
            <button
                className="textDetails how-it-works"
                onClick={() => setOpen(true)}
            >
                how it works.
            </button>
            <Modal open={open} onClose={() => setOpen(false)} center>
                <h2 className=" text-center">EyeOnYou User Guide</h2>
                <hr />
                {userGuide}
            </Modal>
        </>
    );
};

export default HowItWorksModal;
