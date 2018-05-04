// 字节转base64编码
let BufferToBase64 = function (buffer) {
  return 'data:image/png;base64,' + btoa(
    new Uint8Array(buffer)
      .reduce((data, byte) => data + String.fromCharCode(byte), '')
  )
}
export {BufferToBase64}
