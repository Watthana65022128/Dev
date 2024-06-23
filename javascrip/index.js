let monthlySaving = 5000; // เงินออมต่อเดือน
const annualIncreaseRate = 0.03; // อัตราเพิ่มขึ้นของเงินออมต่อปี 3%
const years = 20; // จำนวนปีที่ออม

let totalSavings = 0; // เก็บยอดเงินออมทั้งหมด
let savingsHistory = []; // เก็บประวัติการออมในแต่ละเดือน

for (let year = 1; year <= years; year++) {
    for (let month = 1; month <= 12; month++) {
        totalSavings += monthlySaving;
        savingsHistory.push({ year, month, monthlySaving, totalSavings });
    }
    monthlySaving += monthlySaving * annualIncreaseRate; // เพิ่มเงินออมต่อเดือน 3% ทุกปี
}

// แสดงผลยอดออม และยอดรวมแต่ละเดือน
savingsHistory.forEach(record => {
    console.log(`ปีที่ ${record.year} เดือนที่ ${record.month} ออมเงิน: ${record.monthlySaving.toFixed(2)} ยอดรวม: ${record.totalSavings.toFixed(2)}`);
});

// แสดงผลยอดรวมทั้งหมด
console.log(`ยอดเงินออมทั้งหมดหลังจาก ${years} ปี: ${totalSavings.toFixed(2)}`);
