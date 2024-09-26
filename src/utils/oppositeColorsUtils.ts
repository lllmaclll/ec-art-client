// ฟังก์ชันเพื่อหาสีตรงข้าม
export const getComplementaryColor = (hex: string) => {
    // เอาเครื่องหมาย # ออกจากสี ถ้ามี
    hex = hex.replace('#', '');
  
    // แปลงค่าสี hex เป็น RGB
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
  
    // คำนวณหาสีตรงข้ามโดยการลบค่าสี RGB ออกจาก 255
    const compR = (255 - r).toString(16).padStart(2, '0');
    const compG = (255 - g).toString(16).padStart(2, '0');
    const compB = (255 - b).toString(16).padStart(2, '0');
  
    // คืนค่าสีตรงข้ามในรูปแบบ hex
    return `#${compR}${compG}${compB}`;
  };
  