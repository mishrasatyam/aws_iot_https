import {readFile} from 'fs/promises'
import fetch from 'node-fetch'
import {Agent} from 'https'

const {endpoint,pem_cert,private_key} = JSON.parse(await readFile('config.json'))
const topic = 'topic_1' // topic name should be presnet in policy too!!

async function send_data(){
    const url = `https://${endpoint}:8443/topics/${topic}?qos=1`
    const method = 'POST'
    const body = JSON.stringify({msz:"Hello from coldboxchain!"})

    const res = await fetch(url,{method,body,agent:new Agent({
        cert:await readFile(pem_cert,'utf-8'),
        key:await readFile(private_key,'utf-8')
    })})
    console.log(res.status,await res.json())
}

send_data()