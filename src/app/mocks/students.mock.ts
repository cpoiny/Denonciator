export type Gender='Homme'|'Femme';
export type Status='Present'|'Absent';
export interface Student{
    id:number;
    identity:string;
    gender:Gender;
    status:Status;
    
}
export const Students:Student[]=[
    {
        id:1,
        identity: "Fahd",
        gender: 'Homme',
        status: 'Present'
    },
    {
        id:2,
        identity: "Jerome",
        gender: 'Homme',
        status: 'Present'
    },
    {
        id:3,
        identity: "Thomas",
        gender: 'Homme',
        status: 'Absent'
    },
    {
        id:4,
        identity: "Erdal",
        gender: 'Homme',
        status: 'Present'
    },
    {
        id:5,
        identity: "Hazar",
        gender: 'Femme',
        status: 'Absent'
    },
    {
        id:6,
        identity: "Clara",
        gender: 'Femme',
        status: 'Absent'
    },
    {
        id:7,
        identity: "Diambere",
        gender: 'Femme',
        status: 'Present'
    },
    {
        id:8,
        identity: "Christelle",
        gender: 'Femme',
        status: 'Present'
    },
    {
        id:9,
        identity: "Liliana",
        gender: 'Femme',
        status: 'Present'
    },
    {
        id:10,
        identity: "Kenzia",
        gender: 'Femme',
        status: 'Present'
    },
    {
        id:11,
        identity: "Fama",
        gender: 'Femme',
        status: 'Present'
    },
    {
        id:12,
        identity: "Morgane",
        gender: 'Femme',
        status: 'Present'
    },
    {
        id:13,
        identity: "Jiyun",
        gender: 'Femme',
        status: 'Present'
    },
    {
        id:14,
        identity: "Anne",
        gender: 'Femme',
        status: 'Present'
    },
    {
        id:15,
        identity: "Assa",
        gender: 'Femme',
        status: 'Present'
    },
    {
        id:16,
        identity: "Julie",
        gender: 'Femme',
        status: 'Present'
    },
    {
        id:17,
        identity: "Katia",
        gender: 'Femme',
        status: 'Present'
    },
    {
        id:18,
        identity: "Cynthia",
        gender: 'Femme',
        status: 'Absent'
    }

]; 