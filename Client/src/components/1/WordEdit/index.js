import { Editor } from "@tinymce/tinymce-react";
import { WordEditContainer } from "./styled";

const WordEdit = () => {
    return (  
        <WordEditContainer>
            <Editor 
                apiKey="mbse8bnylyttkkcul3b8wf174fumv1dwoe7romoif6cirr9f" 
                initialValue="<p>This is the initial content of the editor.</p>"
                init={{
                    height: 500,
                    menubar: true,
                    plugins: [
                      'advlist autolink lists link image charmap print preview anchor',
                      'searchreplace visualblocks code fullscreen',
                      'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar: 'undo redo | formatselect | ' +
                    'bold italic backcolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
            />

        </WordEditContainer>
    );
}
 
export default WordEdit;