import React from 'react';

var ReactS3Uploader = require('react-s3-uploader');


class S3UploadComponent extends React.Component {

    onUploadStart = () => {
        console.log("onUploadStart!");
    }

    onSignedUrl = () => {
        console.log("onSignedUrl!");
    }

    onUploadProgress = () => {
        console.log("onUploadProgress!");
    }

    onUploadError = () => {
        console.log("onUploadError!");
    }

    onUploadFinish = () => {
        console.log("onUploadFinish!");
    }

    render() {
        return (
            <form onSubmit={(e) => {e.preventDefault()}}>

                <ReactS3Uploader
                    signingUrl="http:localhost:8000/s3/sign"
                    signingUrlMethod="GET"
                    accept="image/*"
                    s3path="/uploads/"
                    preprocess={this.onUploadStart}
                    onSignedUrl={this.onSignedUrl}
                    onProgress={this.onUploadProgress}
                    onError={this.onUploadError}
                    onFinish={this.onUploadFinish}
                    // signingUrlHeaders={{ additional: headers }}
                    // signingUrlQueryParams={{ additional: query-params }}
                    // signingUrlWithCredentials={ true }      // in case when need to pass authentication credentials via CORS
                    uploadRequestHeaders={{ 'x-amz-acl': 'public-read' }}  // this is the default
                    contentDisposition="auto"
                    scrubFilename={(filename) => filename.replace(/[^\w\d_\-.]+/ig, '')}
                    // server="http://cross-origin-server.com"
                    inputRef={cmp => this.uploadInput = cmp}
                    autoUpload={true}
                />
                <input type="submit" value="Submit" />
            </form>
        );
    }

}
export default S3UploadComponent;