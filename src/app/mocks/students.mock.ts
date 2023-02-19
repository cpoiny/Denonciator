export type Gender='Homme'|'Femme';
export interface Student{
    id:number;
    identity:string;
    gender:Gender;
    status:boolean;
    
}
export const STUDENTSLIST :Student[]=[
    {
        id:1,
        identity: "Fahd",
        gender: 'Homme',
        status: true
    },
    {
        id:2,
        identity: "Jerome",
        gender: 'Homme',
        status: true
    },
    {
        id:3,
        identity: "Thomas",
        gender: 'Homme',
        status: false
    },
    {
        id:4,
        identity: "Erdal",
        gender: 'Homme',
        status: true
    },
    {
        id:5,
        identity: "Hazar",
        gender: 'Femme',
        status: false
    },
    {
        id:6,
        identity: "Clara",
        gender: 'Femme',
        status: true
    },
    {
        id:7,
        identity: "Diambere",
        gender: 'Femme',
        status: true
    },
    {
        id:8,
        identity: "Christelle",
        gender: 'Femme',
        status: true
    },
    {
        id:9,
        identity: "Liliana",
        gender: 'Femme',
        status: true
    },
    {
        id:10,
        identity: "Kenzia",
        gender: 'Femme',
        status: true
    },
    {
        id:11,
        identity: "Fama",
        gender: 'Femme',
        status: true
    },
    {
        id:12,
        identity: "Morgane",
        gender: 'Femme',
        status: true
    },
    {
        id:13,
        identity: "Jiyun",
        gender: 'Femme',
        status: true
    },
    {
        id:14,
        identity: "Anne",
        gender: 'Femme',
        status: true
    },
    {
        id:15,
        identity: "Assa",
        gender: 'Femme',
        status: true
    },
    {
        id:16,
        identity: "Julie",
        gender: 'Femme',
        status: true
    },
    {
        id:17,
        identity: "Katia",
        gender: 'Femme',
        status: true
    },
    {
        id:18,
        identity: "Cynthia",
        gender: 'Femme',
        status: false
    }

]; 