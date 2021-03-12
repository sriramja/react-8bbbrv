import { render } from 'react-dom';
import './index.css';
import * as React from 'react';
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, Inject } from '@syncfusion/ej2-react-pdfviewer';
import { SampleBase } from './sample-base';
export class Default extends SampleBase {
    render() {
        return (<div>
        <div className='control-section'>
            
            <PdfViewerComponent id="container" documentPath="https://github.com/sriramja/Sample/raw/main/BIAN-How-to-Guide-Applying-the-BIAN-Standard-V70-Final-V10.pdf" serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/pdfviewer" style={{ 'height': '640px' }}>
                <Inject services={[Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields]}/>
            </PdfViewerComponent>
          </div>
 
        </div>);
    }
}

render(<Default />, document.getElementById('sample'));