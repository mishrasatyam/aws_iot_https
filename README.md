# aws_iot_https
**PREREQUESTIES**
I am using node js 15.9.0\
Make sure you have added your topic and node js sdk to your certificate policy.\
cd aws_iot_sample && npm install (to install dependencies)\
Assuming your thing name is thing1\
You will get files like root-CA.Crt , thing1.cert.pem, thing1.private.pem, thing1.public.key and start.sh\
Put all above files(except start.sh) in files folder there.\
Edit config.json mentioning below fields and file paths\
You can find endpoint easily in start.sh file.\
eg : \
{\
    "endpoint":"a1czcjqel2mjgt-ats.iot.ap-south-1.amazonaws.com",\
    "pem_cert": "files/thing1.cert.pem",\
    "private_key":"files/thing1.private.key",\
}\
Now you can do node index.js to send data\