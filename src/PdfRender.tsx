import { useState } from "react";
import PdfExample from "./PdfExample";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";

// Estilos definidos en un objeto para mayor claridad
const styles = {
  button: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginBottom: "20px",
  },
  viewButton: {
    backgroundColor: "#007BFF",
    color: "white",
  },
  downloadButton: {
    backgroundColor: "#28a745",
    color: "white",
  },
  viewerContainer: {
    width: "100%",
    height: "90vh",
    marginBottom: "20px",
  },
  pdfViewer: {
    width: "100%",
    height: "100%",
  },
};

export default function PdfRender() {
  const [showPdf, setShowPdf] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      {/* Botón para alternar la visualización del PDF */}
      <button
        onClick={() => setShowPdf(!showPdf)}
        style={{ ...styles.button, ...styles.viewButton }}
      >
        {showPdf ? "Ocultar PDF" : "Ver PDF"}
      </button>

      {/* Visor de PDF */}
      {showPdf && (
        <div style={styles.viewerContainer}>
          <PDFViewer style={styles.pdfViewer}>
            <PdfExample />
          </PDFViewer>
        </div>
      )}

      {/* Botón para descargar el PDF */}
      <PDFDownloadLink document={<PdfExample />} fileName="example.pdf">
            <button style={{ ...styles.button, ...styles.downloadButton }}>
              Descargar PDF
            </button>
      </PDFDownloadLink>
    </div>
  );
}
