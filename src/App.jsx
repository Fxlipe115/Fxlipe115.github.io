import "./App.css";
import hello from "./assets/images/hello.gif";
import woah from "./assets/images/woah.gif";
import floppy from "./assets/images/floppy.gif";
import surftime from "./assets/images/surftime.gif";
import note from "./assets/images/note.gif";
import baby from "./assets/images/baby.gif";
import enter from "./assets/images/enter.gif";
import camera from "./assets/images/camera.gif";
import image from "./assets/images/image.png";
import cool from "./assets/images/cool.gif";
import okay from "./assets/images/okay.gif";
import keyboard from "./assets/images/keyboard.gif";
import blown from "./assets/images/blown.gif";
import run from "./assets/images/run.gif";
import counter from "./assets/images/counter.gif";
import back from "./assets/images/back.gif";

export default function App() {
  return (
    <div
      style={{
        textAlign: "center",
        minHeight: "100vh",
      }}
    >
      <table border={6} cellPadding={8} style={{ margin: "auto" }}>
        <tbody>
          <tr>
            <td>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <img src={hello} alt="Hello GIF" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={woah} alt="Woah GIF" height="50%" width="50%" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src={floppy}
                        alt="Floppy GIF"
                        height="30%"
                        width="30%"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src={surftime}
                        alt="Surf Time GIF"
                        height="50%"
                        width="50%"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={note} alt="Note GIF" height="20%" width="20%" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={baby} alt="Baby GIF" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <h1
                        style={{
                          color: "red",
                          fontFamily: "Comic Sans MS",
                        }}
                      >
                        Welcome to Felipe Graeff's amazing website
                      </h1>
                      <a
                        href="/software-portfolio"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={enter} alt="Enter Software" />
                      </a>
                      <br />
                      <a
                        href="/photo-portfolio"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          height="30%"
                          width="30%"
                          src={camera}
                          alt="Enter Photo"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={image} alt="Placeholder" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <img
                        src={cool}
                        alt="Cool GIF"
                        height="100%"
                        width="100%"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={okay} alt="Okay GIF" height="50%" width="50%" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src={keyboard}
                        alt="Keyboard GIF"
                        height="50%"
                        width="50%"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src={blown}
                        alt="Blown GIF"
                        height="50%"
                        width="50%"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={run} alt="Run GIF" height="10%" width="10%" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src={counter} alt="Counter GIF" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
