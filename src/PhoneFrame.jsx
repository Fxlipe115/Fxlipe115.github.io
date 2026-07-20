import "./PhoneFrame.css";

// Nokia 3310 photo backdrop (mobile only). The .app content is positioned over
// the phone's green LCD region so the page shows "through the screen".
// See PhoneFrame.css for the screen-rectangle knobs.
export default function PhoneFrame() {
  return <div className="phone-frame" aria-hidden="true" />;
}
