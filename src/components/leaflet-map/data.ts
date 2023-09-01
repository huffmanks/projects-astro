interface MapData {
    id: string
    title: string
    coordinates: {
        lat: number
        lon: number
    }
    description: string
    mediaType: 'image' | 'youtube'
    mediaUrl: string
}

export const data: MapData[] = [
    {
        id: 'NUq2AmbVlkqkeZfTiKCr8ASTSe4dGwF1',
        title: 'Camp Buckhorn',
        coordinates: {
            lat: 34.9458768,
            lon: -82.3845967,
        },
        description:
            'Beloved Camp Buckhorn has received a makeover and is ready for your next family reunion, wedding or business retreat in the Greenville area. Make an appointment to visit the newly restored building and plan your next event.',
        mediaType: 'youtube',
        mediaUrl: '2S1wPkxSJoE',
    },
    {
        id: 'NUq2AmbVlkqkeZfTiKCr8ASTSe4dGwF2',
        title: 'Lake Placid',
        coordinates: {
            lat: 34.9281831,
            lon: -82.3682076,
        },
        description: 'Lake Placid is a 13-acre lake located within Paris Mountain State Park offering swimming, fishing, and non-motorized boating.',
        mediaType: 'image',
        mediaUrl: '/leaflet-map/lake-placid.jpg',
    },
    {
        id: 'NUq2AmbVlkqkeZfTiKCr8ASTSe4dGwF3',
        title: 'North Lake',
        coordinates: {
            lat: 34.935825,
            lon: -82.3911364,
        },
        description: 'North Lake is one of the more remote areas of Paris Mountain, with several different trail routes to get there.',
        mediaType: 'image',
        mediaUrl: '/leaflet-map/north-lake.jpg',
    },
]
