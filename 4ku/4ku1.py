def snail(snail_map):
    result = []
    while snail_map:
    
        result += snail_map.pop(0)
        
        if snail_map:
            for row in snail_map:
                result.append(row.pop())
        
        if snail_map:
            result += snail_map.pop()[::-1]
        
        if snail_map:
            for row in snail_map[::-1]:
                result.append(row.pop(0))
    return result
