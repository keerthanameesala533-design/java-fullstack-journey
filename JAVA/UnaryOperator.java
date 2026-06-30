public class UnaryOperatorExample {
    public static void main(String[] args) {

        int a = 10;

        // Unary plus
        System.out.println("Unary Plus (+a): " + (+a));

        // Unary minus
        System.out.println("Unary Minus (-a): " + (-a));

        // Increment
        a++;
        System.out.println("After Increment (a++): " + a);

        // Decrement
        a--;
        System.out.println("After Decrement (a--): " + a);

        // Logical NOT
        boolean flag = true;
        System.out.println("Logical NOT (!flag): " + (!flag));
    }
}