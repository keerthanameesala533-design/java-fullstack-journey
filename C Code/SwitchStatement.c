#include <stdio.h>
int main()
{
    int n;
    scanf("%d", &n);
    switch (n)
    {
    case1:
        printf("Addition");
        break;
    case2:
        printf("Subtraction");
        break;
    case3:
        printf("Multiplication");
        break;
    case4:
        printf("Division");
        break;
    default:
        printf("Invalid input");
        break;
    }
    return 0;
}