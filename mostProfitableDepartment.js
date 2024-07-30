export default function mostProfitableDepartment(salesData) {
    const departmentSales = {};

    salesData.forEach(sale => {
        if (!departmentSales[sale.department]) {
            departmentSales[sale.department] = 0;
        }
        departmentSales[sale.department] += sale.sales;
    });

    let maxSales = 0;
    let maxDepartment = '';
    for (let department in departmentSales) {
        if (departmentSales[department] > maxSales) {
            maxSales = departmentSales[department];
            maxDepartment = department;
        }
    }

    return maxDepartment;
}

export function mostProfitableDay(salesData) {
    const daySales = {};

    salesData.forEach(sale => {
        if (!daySales[sale.day]) {
            daySales[sale.day] = 0;
        }
        daySales[sale.day] += sale.sales;
    });

    let maxSales = 0;
    let maxDay = '';
    for (let day in daySales) {
        if (daySales[day] > maxSales) {
            maxSales = daySales[day];
            maxDay = day;
        }
    }

    return maxDay;
}
