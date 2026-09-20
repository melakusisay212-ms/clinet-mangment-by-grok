export const EC_MONTHS=['Meskerem','Tikimt','Hidar','Tahsas','Tir','Yekatit','Megabit','Miazia','Ginbot','Sene','Hamle','Nehase','Pagume'];
const DAY=86400000;
function gLeap(y:number){return y%4===0&&(y%100!==0||y%400===0)}
// Ethiopian new year is Sep 11, or Sep 12 when the following Gregorian year is leap.
export function ecStart(y:number){const gy=y+7;return new Date(Date.UTC(gy,8,gLeap(gy+1)?12:11))}
export function g2ec(date:Date){const x=new Date(Date.UTC(date.getFullYear(),date.getMonth(),date.getDate()));let y=x.getUTCFullYear()-7;let s=ecStart(y);if(x<s){y--;s=ecStart(y)}const n=Math.floor((x.getTime()-s.getTime())/DAY);const month=Math.floor(n/30)+1;return {year:y,month,day:n%30+1}}
export function ec2g(y:number,m:number,d:number){const offset=m<=12?(m-1)*30+d-1:360+d-1;return new Date(ecStart(y).getTime()+offset*DAY)}
export function ecLeap(y:number){return Math.round((ecStart(y+1).getTime()-ecStart(y).getTime())/DAY)===366}
export function ecMonthDays(y:number,m:number){return m===13?(ecLeap(y)?6:5):30}
export function ecLabel(e:{year:number;month:number;day:number}){return `${e.day} ${EC_MONTHS[e.month-1]} ${e.year}`}
export function todayEC(){return g2ec(new Date())}
export function isoToday(){const d=new Date();return d.toISOString().slice(0,10)}
export function isoToEC(iso:string){return g2ec(new Date(`${iso}T00:00:00Z`))}
export function ecToIso(e:{year:number;month:number;day:number}){return ec2g(e.year,e.month,e.day).toISOString().slice(0,10)}
export function addDays(iso:string,n:number){const d=new Date(`${iso}T00:00:00Z`);d.setUTCDate(d.getUTCDate()+n);return d.toISOString().slice(0,10)}
export function addFrequency(iso:string,f:'2w'|'1m'|'2m'|'3m'){const e=isoToEC(iso);if(f==='2w')return addDays(iso,14);const total=e.year*12+(e.month-1)+(f==='1m'?1:f==='2m'?2:3);const y=Math.floor(total/12),m=total%12+1;return ecToIso({year:y,month:m,day:Math.min(e.day,30)})}
export function formatEC(iso:string){return ecLabel(isoToEC(iso))}
