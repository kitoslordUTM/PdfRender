import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import PdfRender from './PdfRender'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PdfRender />
  </StrictMode>,
)
