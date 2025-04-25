import "./App.css";

export default function App() {
  return (
    <div
      style={{
        backgroundImage: "url('/images/back.gif')",
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
                      <img src="/images/hello.gif" alt="Hello GIF" />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="/images/woah.gif"
                        alt="Woah GIF"
                        height="50%"
                        width="50%"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="/images/floppy.gif"
                        alt="Floppy GIF"
                        height="30%"
                        width="30%"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="/images/surftime.gif"
                        alt="Surf Time GIF"
                        height="50%"
                        width="50%"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="/images/note.gif"
                        alt="Note GIF"
                        height="20%"
                        width="20%"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="/images/baby.gif" alt="Baby GIF" />
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
                        Welcome to Felipe Graeff’s amazing website
                      </h1>
                      <a href="/software" target="_blank" rel="noreferrer">
                        <img src="/images/enter.gif" alt="Enter Software" />
                      </a>
                      <br />
                      <a href="/photo" target="_blank" rel="noreferrer">
                        <img src="/images/camera.gif" alt="Enter Photo" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="/images/image.png" alt="Placeholder" />
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
                        src="/images/cool.gif"
                        alt="Cool GIF"
                        height="100%"
                        width="100%"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="/images/okay.gif"
                        alt="Okay GIF"
                        height="50%"
                        width="50%"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="/images/keyboard.gif"
                        alt="Keyboard GIF"
                        height="50%"
                        width="50%"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="/images/blown.gif"
                        alt="Blown GIF"
                        height="50%"
                        width="50%"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="/images/run.gif"
                        alt="Run GIF"
                        height="10%"
                        width="10%"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="/images/counter.gif" alt="Counter GIF" />
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
