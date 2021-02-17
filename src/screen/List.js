import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from 'react-native'

const List = () => {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])
  console.log(data)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error))
      .finally(() => setLoading(false))
  }, [])

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {/* <Text style={{ fontSize: 18, color: 'green', textAlign: 'center' }}>
            {data.length}
          </Text> */}
          <Text
            style={{
              fontSize: 14,
              color: 'green',
              textAlign: 'center',
              paddingBottom: 10,
            }}
          >
            Articles:
          </Text>
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>{`UserId: ${item.userId}
ID: ${item.id}
Title: ${item.title}
Body: 
${item.body}

`}</Text>
            )}
          />
        </View>
      )}
    </View>
  )
}
export default List