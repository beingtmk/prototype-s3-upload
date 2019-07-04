from django.http import HttpResponse
import boto
import mimetypes
import json

conn = boto.connect_s3('AKIA2DKQ7OCJCMYFPVVB', 'dDuuR/GtG+bbUoApFLQkfjRleB1gCV5iVwPcKvS4')

def sign_s3_upload(request):
    print("called view")
    object_name = request.GET['fileName']
    content_type = mimetypes.guess_type(object_name)[0]

    url = conn.generate_url(
        300,
        "PUT",
        'gnayan-media',
        'test' + object_name,
        headers = {'Content-Type': content_type, 'x-amz-acl':'public-read'})

    return HttpResponse(json.dumps({'url': url}))