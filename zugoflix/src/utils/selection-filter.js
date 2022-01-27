export default function selectionFilter({series, films}) {
    return {
        series : [
            { 
                title: 'Belgesel', 
                data: series.filter((item)=> item.genre === 'documentaries'),
            },

            { 
                title: 'Komedi', 
                data: series.filter((item)=> item.genre === 'comedies'),
            },

            { 
                title: 'Çocuk', 
                data: series.filter((item)=> item.genre === 'children'),
            },

            { 
                title: 'Suç', 
                data: series.filter((item)=> item.genre === 'crime'),
            },

            { 
                title: 'İyi Hisset', 
                data: series.filter((item)=> item.genre === 'feel-good'),
            },
        ],
        films: [
            { 
                title: 'Drama', 
                data: films.filter((item)=> item.genre === 'drama'),
            }, 

            { 
                title: 'Heyecan', 
                data: films.filter((item)=> item.genre === 'thriller'),
            }, 

            { 
                title: 'Çocuk', 
                data: films.filter((item)=> item.genre === 'children'),
            }, 

            { 
                title: 'Gerilim', 
                data: films.filter((item)=> item.genre === 'suspense'),
            }, 

            { 
                title: 'Romantik', 
                data: films.filter((item)=> item.genre === 'romance'),
            }, 
        ]
    }
}