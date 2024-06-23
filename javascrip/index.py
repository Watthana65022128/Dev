# กำหนดค่าเริ่มต้น
initial_savings = 5000  # เงินออมเริ่มต้น
increase_rate = 0.03  # อัตราเพิ่มการออมต่อปี
years = 20  # จำนวนปีที่ออมเงิน

# ตัวแปรสำหรับเก็บผลลัพธ์
monthly_savings = []
total_savings = 0

# คำนวณเงินออมในแต่ละเดือนและยอดรวม
for year in range(1, years + 1):
    for month in range(1, 13):
        total_savings += initial_savings
        monthly_savings.append((year, month, initial_savings, total_savings))
    # เพิ่มอัตราการออมทุกปี
    initial_savings *= (1 + increase_rate)

# แสดงผลลัพธ์
for year, month, savings, total in monthly_savings:
    print(f"Year: {year}, Month: {month}, Savings: {savings:.2f}, Total Savings: {total:.2f}")

print(f"\nTotal savings after {years} years: {total_savings:.2f} THB")
