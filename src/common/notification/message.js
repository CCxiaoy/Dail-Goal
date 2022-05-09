import { ElMessage } from "element-plus";

const sendAMessage = (message, type = "") => {
    if (message == null || message.length < 1) { return }
    ElMessage({
        message,
        type,
        center: true,
        duration: 600,
    })
}

export { sendAMessage };